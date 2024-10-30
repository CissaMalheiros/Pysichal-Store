import express from 'express';
import dotenv from 'dotenv';
import storeRoutes from './routes/storeRoutes';
import { setupSwagger } from './swagger';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', storeRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});