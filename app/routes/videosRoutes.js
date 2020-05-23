import { getDatabase } from '../database';

const get = (req, res) => {
  // I use the getDatabase function to get a connection
  // and then have access to query all my videos in the
  // database
  const database = getDatabase();

  // I am using this database connection which I used
  // the "knex.js" library to create and it gives me 
  // functions that resemble SQL
  database('videos')
    .select('*')
    .then((videos) => {
      // Here I say return an object that contains all the videos
      res.send({
        videos: videos,
      });
    })
    .finally(() => {
      database.destroy();
    });
}

export const configureVideoRoutes = (app) => {
  app.get('/api/videos', get);
};