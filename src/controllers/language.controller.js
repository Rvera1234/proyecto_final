import { getConnection } from "./../database/database";

const getReportes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, involucrados, ubicacion FROM table_reportes");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const getReporte = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, involucrados, ubicacion FROM table_reportes WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addReporte = async (req, res) => {
    try {
        const { involucrados, ubicacion } = req.body;

        if (involucrados === undefined || ubicacion === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const language = { involucrados, ubicacion };
        const connection = await getConnection();
        await connection.query("INSERT INTO table_reportes SET ?", language);
        res.json({ message: "Language added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

    const updateReportes = async (req, res) => {
        try {
            const { id } = req.params;
            const { involucrados, ubicacion } = req.body;
    
            if (id === undefined || involucrados === undefined || ubicacion === undefined) {
                res.status(400).json({ message: "Bad Request. Please fill all field." });
            }
    
            const language = { involucrados, ubicacion };
            const connection = await getConnection();
            const result = await connection.query("UPDATE table_reportes SET ? WHERE id = ?", [language, id]);
            res.json(result);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    };
    
    const deleteReporte = async (req, res) => {
        try {
            const { id } = req.params;
            const connection = await getConnection();
            const result = await connection.query("DELETE FROM table_reportes WHERE id = ?", id);
            res.json(result);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    };











export const methods = {
    getReportes,
    getReporte,
    addReporte,
    updateReportes,
    deleteReporte

};