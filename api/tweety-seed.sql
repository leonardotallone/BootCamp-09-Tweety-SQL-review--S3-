TRUNCATE TABLE users, tweets;

INSERT INTO users (name) VALUES ('Tom Hanks');
INSERT INTO users (name) VALUES ('Beyonce');
INSERT INTO users (name) VALUES ('Justin Bieber');
INSERT INTO users (name) VALUES ('Ash Ketchum');
INSERT INTO users (name) VALUES ('E.T.');
INSERT INTO users (name) VALUES ('William Shakespear');
INSERT INTO users (name) VALUES ('Grace Hopper');
INSERT INTO users (name) VALUES ('Kanye West');
INSERT INTO users (name) VALUES ('Taylor Swift');

INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Grace Hopper'),         'It''s easier to ask forgiveness than it is to get permission.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='William Shakespeare'),  'to.be or to.not.be, that is the question.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Beyonce'),             'If you liked it then you should have put a Promise on it.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Tom Hanks'),            'Life is like an array of chocolates.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Justin Bieber'),        'Is it too late now to say sorry? Cuz I''m missing more than just your <body></body>.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Ash Ketchum'),          'char mander, I choose you!', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='E.T.'),                 'E.T. Slack Home.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Taylor Swift'),        'I knew you were trouble when you logged in.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Taylor Swift'),        'I''ve got some whitespace baby — and I''ll write your `.name`', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Kanye West'),          'I think what Kanye West is going to mean is something similar to what Steve Jobs means.', '');
INSERT INTO tweets (user_id, content, imgurl) VALUES ((SELECT id from users where name='Kanye West'),          'I''ma let you finish coding, but…', '');