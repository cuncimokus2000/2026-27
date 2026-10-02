// főoldal
app.get('/', (req, res) => {
    res.json({
        uzenet: 'Kezdo iskolai est api fut',
        eleheto_vegpontok:[
        "Get /api/osztalyok",
        "Get /api/osztalyok/:id",
        "Get /api/osztalyok/:id/diakok",
        "Get /api/diakok",
        "Get /api/diakok/:id",
        "Get /api/diakok?aktiv=1"
        ]
    });
}
)

app.get('/api/osztalyok' , async (req, res) => {
    
})