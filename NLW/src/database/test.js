const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    //inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-23.2336931",
        lng: "-45.8932577",
        name: "Lar de amor",
        about: "Presta assistência a crianças de 06 à 15 anos que se encontre em sitação de risco e/ou vulnerabilidade social.",
        whatsapp: "99999-9999",
        images: [
            "https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até as 18h",
        open_on_weekends: "0"
    })*/

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar dados na tabela para apenas 1 orfanato pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)*/
})