import express from 'express';
import open from 'open';

const PORT = 3000;
let app = express();

app.use(express.static('./'));

app.listen(PORT, () => {
  open(`http://localhost:${ PORT }/`);
  console.log(`Server running on http://localhost:${ PORT }/`);
});
