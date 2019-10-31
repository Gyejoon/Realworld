DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS ( id INTEGER PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        username VARCHAR(20) NOT NULL,
                        password VARCHAR(256) NOT NULL
                        );