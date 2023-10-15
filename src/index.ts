import express, { Application, Response, Request } from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan'
import cors from 'cors';
import compression from 'compression';
import helmet from "helmet";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('Express typescript!');
    });

    this.app.route('/users').post((req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

const app: Application = new App().app;
app.listen(8000);

export default app;
