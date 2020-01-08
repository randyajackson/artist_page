// /routes/productRoute.js
const mongoose = require('mongoose');
const artist_route = mongoose.model('Artist_Info');

module.exports = (app) => {

  app.get(`/api/artist`, async (req, res) => {
    let artists = await artist_route.find();
    return res.status(200).send(artists);
  });

  app.post(`/api/artist`, async (req, res) => {
    let artists = await artist_route.create(req.body);
    return res.status(201).send({
      error: false,
      artists
    })
  })

  app.put(`/api/artist/:id`, async (req, res) => {
    const {id} = req.params;

    let artists = await artist_route.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      artists
    })

  });

  app.delete(`/api/artist/:id`, async (req, res) => {
    const {id} = req.params;

    let artists = await artist_route.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      artists
    })

  })

}