<h1>Spacex-postgres</h1>

That is an implementation using postgres as database system.
The main pupose is to apply a modular arquitecture, like in django is estableshed.

<h3>Create Procfile</h3>

What is it?
<p>That is an empy format file, it works for heroku to know what file initiate the project</p>

```
web: node src/server/server.js
```

<h3>In heroku</h3>
Run the next commands

In your git repo
```
git commit -m "something"
```

In your git/heroku space
```
git push heroku master
```

Ensure that the app's running
```
heroku ps:scale web=1
```

Open direcly from the console
```
heroku open
```

Look at the log files
```
heroku --tail
```

<h3>Links</h3>

In production
```
https://postgresapi-6969.herokuapp.com
```

In heroku git
```
https://git.heroku.com/postgresapi-6969.git
```
