const mysql = require ('mysql');
const db = mysql.createConnection ({
    password:'password',
    user:'root',
    database:'jobboard',
    host:'localhost',
    port:'3306'
});

//Admin requests
const adminAuth = (req,res) => {
    const {email, password} = req.body
    db.query('SELECT EXISTS (SELECT * FROM admin WHERE adminEmail = ?) AS isValidMail', [email], (err, mailresult) =>{
        if(err) {
            throw err
        }
        console.log(mailresult[0].isValidMail)
        if(mailresult[0].isValidMail == 1){
            db.query('SELECT EXISTS (SELECT * FROM admin WHERE adminPassword = ?)', [password], (err, passresult) =>{
                if(err) {
                    throw err
                }
                console.log(passresult)
            })
        }
        //res.status(201).send('User added ')
    })
}

// Users requests
const getUser = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results)
    })
}

const getUserByID = (req, res) => {
    const id = parseInt(req.params.id)
    db.query('SELECT * FROM users WHERE customID = ?', [id], (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}


const createUser = (req, res) => {

    const {firstName, lastName, email, password, zip, address, secondAdress, city, userType} = req.body
    console.log(req.body)
    db.query('INSERT INTO users (firstName, lastName, people_email, password, people_address, people_secondAdress, zip, people_city, isManager) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [firstName, lastName, email, password, address, secondAdress, zip, city, userType], (err, result) =>{
            if(err){
                throw err
            }
            res.status(201).send('User added ')
        } )
}

const createManager = (req, res) => {

    const {firstName, lastName, email, password, company, zip, address, secondAdress, city} = req.body
    console.log(req.body)
    db.query('INSERT INTO users (firstName, lastName, people_email, password, company, people_address, people_secondAdress, zip, people_city, isManager) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, 1)',
        [firstName, lastName, email, password,company, address, secondAdress, zip, city], (err, result) =>{
            if(err){
                throw err
            }
            res.status(201).send('User added ')
        } )
}

const updateUser = (req, res) =>{
    const id = req.params.id_people
    const {firstName, lastName, email, password, address, secondAdress, zip, city, userType} = req.body
    db.query('UPDATE users SET people_email = ?, password = ?, people_address = ?, people_secondAdress = ?, zip = ?, people_city = ?, isManager = ? WHERE id_people = ?',
        [firstName, lastName, email, password, address, secondAdress, zip, city, userType, id], (err, resutls) =>{
        if(err){throw err}
        console.log('User N°'+id+' modified')
        res.status(200).send('User N°'+id+' modified')
    } )
}

const delUser = (req, res) => {
    const id = req.params.id_people
    db.query('DELETE FROM users WHERE id_people = ?', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log(`User deleted with ID: `+ id)
        res.status(200).send(`User deleted with ID:`)
    })
}

//Companies requests
const getCompanies = (req, res) => {
    db.query('SELECT * FROM companies', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results)
    })
}

const getCompName = (req, res) => {
    const name = req.params.name
    db.query('SELECT * FROM companies WHERE compName = $1', [name], (err, results) =>{
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const addComp = (req, res) => {
    const {compName, compWebsite,  compPhone, email, adress, city, compIndustry} = req.body
    db.query('INSERT INTO companies (compName, compWebsite, compPhone, compEmail,  compAdress, compCity, compIndustry) VALUES (?, ?, ?, ?, ?, ?, ?)', [compName, compWebsite,  compPhone, email, adress, city, compIndustry], (err, result) =>{
        if(err){
            throw err
        }
        res.status(201).send('company added with ID: ${result}')
    } )
}

const updateComp = (req, res) => {
    const name = req.params.name
    const {newName, website,  phone, email, address, city, industry} = req.body
    db.query('UPDATE companies SET compName = $1, compWebsite = $2, compPhone = $3, compEmail = $4, compAddress = $5, compCity = $6, compIndustry = $7 WHERE compName = $8',
        [newName, website,  phone, email, address, city, industry, name], (err, resutls) =>{
        if(err){throw err}
        res.status(200).send('Company: ${name} modified')
    } )
}

const delComp = (req, res) => {
    const id = req.params.id_companie

    db.query('DELETE FROM companies WHERE id_companie = ?', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log(`Company deleted with ID: `+id)
        res.status(200).send(`Company deleted with ID:`)
    })
}

//Ads requests
const getAds = (req, res) =>{
    db.query("SELECT * FROM advertisement NATURAL JOIN companies, users WHERE id_manager = id_people", (err,result) => {
        if(err){
            console.log(err);
        }
        res.send(result);

    })
}

const getAdId = (req, res) =>{
    const id = parseInt(req.params.id)
    db.query('SELECT * FROM advertisement ORDER BY postTime ASC WHERE customID = $1', [id], (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}



const updateAd =(req, res) => {
    const id = parseInt(req.body.id)
    const {compID, managerID, title, summary, description, isAvailable} = req.body

    db.query('UPDATE advertisement SET compID = $1, managerID = $2, title = $3, sumDesc = $4, jobDesc = $5, isAvailable = $6 WHERE AdID = $7',
        [compID, managerID, title, summary, description, isAvailable, id], (err, resutls) =>{
            if(err){throw err}
            res.status(200).send('Company: ${name} modified')
        } )
}

const delAd =(req, res) => {
    const id_advertisement = req.params.id_advertisement
    db.query('DELETE FROM advertisement WHERE id_advertisement = ?', [id_advertisement], (error, results) => {
        if (error) {
            throw error
        }
        console.log('Offer with ID: '+id_advertisement+' deleted')
        res.status(200).send(`Offer with ID: deleted`)
    })
}

const getMsgs = (req, res) =>{
    db.query("SELECT * FROM postmessage", (err,result) => {
        if(err){
            console.log(err);
        }
        res.send(result);

    })
}

const delMsg = (req, res) =>{
    const id = req.params.id_postMessage
    db.query('DELETE FROM postmessage WHERE id_postMessage = ?', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log('Message with ID: '+id+' deleted')
        res.status(200).send(`Message with ID: deleted`)
    })
}

const postMessage =(req, res) =>{
    const {id_advertisement,id_people, title, email, message} = req.body
    console.log(req.body)
    db.query('INSERT INTO postmessage (id_advertisement, id_redacteur, title, email, message) VALUES (?, ?, ?, ?, ?)',
        [id_advertisement,id_people, title, email, message], (err, result) =>{
        if(err){
            throw err
        }
        
        res.status(201).send('post message ok')
    } )
}

const createApplicant = (req, res) => {

    const {firstName, lastName, email, password, zip, adress, secondAdress, city} = req.body
    
    db.query('INSERT INTO users (firstName, lastName, people_email, password, people_address, people_secondAdress, zip, people_city, isManager) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)',
        [firstName, lastName, email, password, adress, secondAdress, zip, city], (err, result) =>{
        if(err){
            throw err
        }
        res.status(201).send('User added ')
    } )
}
const postAd =(req, res) =>{
    const {idCompanie, idManager, title, city, salaire, typeContrat, description} = req.body
    db.query('INSERT INTO advertisement (id_companie, id_manager, title, city, salaire, typeContrat, description, isAvailable) VALUES (?, ?, ?, ?, ?,?, ?, 1)',
        [idCompanie, idManager, title, city, salaire, typeContrat, description], (err, result) =>{
        if(err){
            throw err
        }
        res.status(201).send('post added')
    } )
}


module.exports = {
    adminAuth,
    getUser,
    getUserByID,
    createUser,
    createApplicant,
    createManager,
    updateUser,
    delUser,
    getCompanies,
    getCompName,
    addComp,
    updateComp,
    delComp,
    getAds,
    getAdId,
    postAd,
    updateAd,
    delAd,
    getMsgs,
    delMsg,
    postMessage
}