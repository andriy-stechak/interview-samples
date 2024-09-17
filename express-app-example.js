// Create small express application which handles 2 endpoints: 
// GET /users?limit=5&offset=0
// GET /users/<id>
// * Secure endpoints with Basic authentication

const express = require('express');

const app = express();

const users = express.Router();

const logger = console;

const PORT = process.env.SERVICE_PORT || 3000;

const mockedUsers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Tom', lastName: 'Fisher' },
    { id: 3, firstName: 'Robert', lastName: 'Emender' },
    { id: 4, firstName: 'Matt', lastName: 'Winter' },
    { id: 5, firstName: 'Lisa', lastName: 'Norris' },
    { id: 6, firstName: 'Austin', lastName: 'Hamilton' },
    { id: 7, firstName: 'Jessica', lastName: 'Morgan' },
    { id: 8, firstName: 'Alfred', lastName: 'Brain' },
]

const composeHttpError = (message = 'Internal Server Error', statusCode = 500) => {
    const error = Object.assign(new Error(message), { statusCode });

    return error
}

const extractBasicAuthCreds = (req) => {
    if (req.headers.authorization) {
        const [type = '', credsBase64 = ''] = req.headers.authorization.split(' ');

        if (type.toLowerCase() === 'basic') {
            const [name, pass] = atob(credsBase64).split(':');
            return { name, pass };
        }
    }
}

const authenticate = (req, res, next) => {
    const user = extractBasicAuthCreds(req);

    if (!user || user.name !== 'user' || user.pass !== 'pass') {
        next(composeHttpError('Unauthorized', 401));
        return;
    }

    next();
}

users.get('/', authenticate, (req, res) => {
    const limit = req.query.limit || 5;
    const offset = req.query.offset || 0;
    res.json({
        total: mockedUsers.length,
        items: mockedUsers.slice(offset, limit),
    });
    res.end();
});

users.get('/:id', authenticate, (req, res) => {
    const idToFind = req.params.id;
    const user = mockedUsers.find(({ id }) => id === idToFind);

    if (!user) {
        throw composeHttpError('User not found', 404);
    }

    res.json(user);
    res.end();
});

// app.use(authenticate);

app.use('/users', users);

app.use((req, res, next) => {
    const error = composeHttpError('Not Found', 404);

    res.statusCode = error.statusCode;
    res.json({ message: error.message, status: error.statusCode });
    res.end();
});

app.use((err, req, res, next) => {
    let error = err;
    if (!err.statusCode) {
        error = composeHttpError();
    }

    res.statusCode = error.statusCode;
    res.json({ message: error.message, status: error.statusCode });
    res.end();
});

app.listen(PORT, () => {
    logger.info(`Service is listening ${PORT} port`);
});