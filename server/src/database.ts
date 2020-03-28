import {
  ConnectionManager,
  getConnectionManager,
  Connection,
  ConnectionOptions,
  createConnection,
} from 'typeorm';
import 'pg';

export default class Database {
  connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async connect() {
    const password = process.env.TYPEORM_PASSWORD;
    if (!password) {
      throw new Error('Failed to load database password');
    }

    const connectionOptions: ConnectionOptions = {
      entities: ['src/entity/**/*.ts'],
      password,
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      database: process.env.TYPEORM_DATABASE,
      username: process.env.TYPEORM_USERNAME,
      port: parseInt(process.env.TYPEORM_PORT || '5432', 10),
      synchronize: process.env.SYNCHRONIZE === 'true',
      appname: 'reading-log-server',
      logging: process.env.TYPEORM_LOGGING === 'true',
    };

    return createConnection(connectionOptions);
  }

  async getConnection(): Promise<Connection> {
    const CONNECTION_NAME = `default`;
    if (this.connectionManager.has(CONNECTION_NAME)) {
      const connection = this.connectionManager.get(CONNECTION_NAME);
      try {
        if (connection.isConnected) {
          await connection.close();
        }
      } catch {}
      return connection.connect();
    }

    console.log('database connection succeed.');

    return this.connect();
  }
}
