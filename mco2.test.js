const {master, slave1, slave2} = require('./nodes');

describe('Master Node Test Connection' ,() => {
    // Close the connection pool after all tests
    afterAll(async () => {
        await master.end();
        await slave1.end();
        await slave2.end();
    });

    test('Should connect to Master Node', async () => {
        try {
            const connection = await master.getConnection(); 
            expect(connection).toBeDefined(); 
            connection.release(); 
        } catch (error) {
            throw new Error(`Unable to connect to Master Node: ${error.message}`);
        }
    });

    test('Should connect to Slave 1', async () => {
        try {
            const connection = await slave1.getConnection(); 
            expect(connection).toBeDefined(); 
            connection.release();
        } catch (error) {
            throw new Error(`Unable to connect to Slave 1: ${error.message}`);
        }
    });

    test('Should connect to Slave 2', async () => {
        try {
            const connection = await slave2.getConnection();
            expect(connection).toBeDefined(); 
            connection.release();
        } catch (error) {
            throw new Error(`Unable to connect to Slave 2: ${error.message}`);
        }
    });

    test('', () => {

    });

});