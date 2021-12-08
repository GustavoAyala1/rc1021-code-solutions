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
  const { name, course, score } = req.body;

  const sql = `
    insert into "grades" ("nme","course","score")
    values ('${name}','${course}','${score}')
    returning *;
  `;
  if (!name || !course || !score || score < 0 || score > 100) {
    res.status(400).json({ error: 'Name, Course, and Score are required' });
  }

  db.query(sql).then(result => {
    res.status(200).json({ name, course, score });
  // eslint-disable-next-line node/handle-callback-err
  }).catch(error => {
    res.status(500).json({ error: 'An unexpected error occurred' });
  });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const { name, course, score } = req.body;
  const id = +req.params.gradeId;

  const sqlChecking = `
  select "name","course","score"
  from "grades"
  where "gradeId" = ${id};
  `;

  const sql = `
  update "grade"
  set "name"='${name}',"course"='${course}',"score"='${score}'
  where "gradeId"=${id}
  returning *;
  `;

  if (!name || !course || !score || score < 0 || score > 100) {
    res.status(400).json({ error: 'Name, Course, and Score are required' });
  } else {
    db.query(sqlChecking)
      .then(result => {
        if (result.rows.length !== 0) {
          db.query(sql)
            .then(results => {
              res.json({ test: 'successfully updated', results: results.rows });
            })
          // eslint-disable-next-line node/handle-callback-err
            .catch(error => { res.status(500).json({ error: 'An unexpected error occurred' }); });
        } else {
          throw new Error();
        }
      })
      // eslint-disable-next-line node/handle-callback-err
      .catch(error => {
        res.status(404).json({ error: 'Student with this gradeId does not exist' });
      });
  }

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = +req.params.gradeId;

  const sql = `
 delete from "grads"
 where "gradeId"=${id};
  `;

  const sqlChecking = `
  select "name","course","score"
  from "grades"
  where "gradeId" = ${id};
  `;

  if (id < 0 || isNaN(id)) {
    res.status(400).json({ error: 'Please enter a valid gradeId' });
  } else {
    db.query(sqlChecking).then(result => {
      db.query(sql)
        .then(results => { res.json({ test: 'successfully deleted' }); })
      // eslint-disable-next-line node/handle-callback-err
        .catch(error => { res.status(500).json({ error: 'An unexpected error occurred' }); });

      // eslint-disable-next-line node/handle-callback-err
    }).catch(error => {
      res.status(404).json({ error: 'Student with this gradeId does not exist' });
    });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server running on port 3000');
});
