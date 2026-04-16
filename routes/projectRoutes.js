import { Router } from "express";
const router = Router();

//Banco em Memória - array de projetos
let projects = [
    { id: 1001, title: "Meu primeiro projeto", description: "concluido", createdAt: "" },
    { id: 1002, title: "Um projeto Qualquer", description: "iniciado", createdAt: "" },
    { id: 1003, title: "Projeto Top", description: "iniciado", createdAt: "" }
];

//GET /api/v1/projects - listar todos os projetos
router.get('/', (req, res) => {
    res.json({
        projects,
        total: projects.length
    })
});

//POST /api/v1/projects - criar novo projeto
router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: "o campo title é obrigatório" });
    }
    const project = {
        id: parseInt(Date.now().toString()),
        title: title,
        description: description || '',
        createdAt: new Date().toISOString()
    }
    projects.push(project);
    res.status(201).json(project);
});

//GET /api/v1/projects/:id - buscar projeto pelo id
router.get('/:id', (req, res) => {
    const { id } = req.params; //desestruturação
    const project = projects.find(item => item.id === parseInt(id));
    if (!project) {
        return res.status(400).json({ error: "Projeto não encontrado" });
    }
    res.json(project)
});

//PATCH /api/v1/projects/:id - atualizar projeto
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        return res.status(400).json({ error: "Projeto não encontrado" });
    }
    projects[index] = { ...projects[index], ...req.body, id: projects[index].id };
    res.json(projects[index]);
});

//DELETE api/v1/projects/:id - excluir um projeto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        return res.status(400).json({ error: "Projeto não encontrado" });
    }
    projects.splice(index, 1);
    res.sendStatus(204)
});

export default router;