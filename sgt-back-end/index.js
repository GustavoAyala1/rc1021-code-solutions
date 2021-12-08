const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from grades;
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    // eslint-disable-next-line node/handle-callback-err
    .catch(error => {
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.post('/api/grades', (req, res) => {
  let { name, course, score } = req.body;
  score = +score;

  const sql = `
    insert into "grades" ("name","course","score")
    values ('${name}','${course}','${score}')
    returning *;
  `;
  if (!name || !course || !score || score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Name, Course, and Score are required' });
  }

  db.query(sql).then(result => {
    const gradeId = result.rows[0];
    res.status(200).json({ gradeId });
  // eslint-disable-next-line node/handle-callback-err
  }).catch(error => {
    res.status(500).json({ error: 'An unexpected error occurred' });
  });
});

app.put('/api/grades/:gradeId', (req, res) => {
  let { name, course, score } = req.body;
  score = +score;
  const id = +req.params.gradeId;

  const sql = `
  update "grades"
  set "name"='${name}',"course"='${course}',"score"='${score}'
  where "gradeId"=${id}
  returning *;
  `;

  if (!name || !course || !score || score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Name, Course, and Score are required' });
  } else {
    db.query(sql)
      .then(results => {
        const updated = results.rows;
        if (updated.length > 0) {
          res.status(200).json({ success: 'Successfully updated', updated: [name, course, score] });
        } else {
          res.status(404).json({ error: 'Student with this gradeId does not exist' });
        }
      })
      // eslint-disable-next-line node/handle-callback-err
      .catch(error => {
        res.status(500).json({ error: 'An unexpected error occurred' });
      });

  }

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = +req.params.gradeId;

  const sql = `
 delete from "grades"
 where "gradeId"='${id}'
 returning *;
  `;

  if (id < 0 || isNaN(id) || !Number.isInteger(id)) {
    res.status(400).json({ error: 'Please enter a valid gradeId' });
  } else {
    db.query(sql)
      .then(results => {
        const updated = results.rows;
        if (updated.length !== 0) {
          res.status(200).json({ updated, test: 'successfully deleted' });
        } else {
          res.status(404).json({ error: 'Student with this gradeId does not exist' });
        }
      })
    // eslint-disable-next-line node/handle-callback-err
      .catch(error => {
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server running on port 3000');
});
