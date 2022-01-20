'use strict';
module.exports = function(app){
    const db = require('./queries')

    app.route('/get/user')
        .get(db.getUser)

    app.route('/user/:id')
        .get(db.getUserByID)
        .put(db.updateUser)

    app.route('/get/compagnie')
        .get(db.getCompanies)

    app.route('/get/adv')
        .get(db.getAds)

    app.route('/admin/auth')
        .get(db.adminAuth)

    app.route('/create/user')
        .post(db.createUser)

    app.route('/update/user/:id_people')
        .put(db.updateUser)

    app.route('/create/userManager')
        .post(db.createManager)

    app.route('/create/userNotManager')
        .post(db.createApplicant)

    app.route('/get/postMessage')
        .get(db.getMsgs)

    app.route('/user/apply')
        .post(db.postMessage)

    app.route('/create/post')
        .post(db.postAd)

    app.route('/create/company')
        .post(db.addComp)

    app.route('/delete/post/:id_advertisement')
        .delete(db.delAd)

    app.route('/delete/user/:id_people')
        .delete(db.delUser)

    app.route('/delete/comp/:id_companie')
        .delete(db.delComp)

    app.route('/delete/msg/:id_postMessage')
        .delete(db.delMsg)
}


