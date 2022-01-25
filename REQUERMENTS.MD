Database Schema:
    Users Table:

        (id serial primary key, first_name varchar, last_name varchar, password varchar)

        index   --> /users     [get]    body{token}
        show    --> /users/:id [get]    body{token}
        create  --> /users     [post]   body{first_name, last_name, password}
        update  --> /users/:id [patch]  body{first_name, last_name, token}
        delete  --> /users/:id [delete] body{token}
        login   --> /login     [post]   body{username, password}
        get_token-> /users/:id/get_token [get] no body content
        
    Products Table:

        (id serial primary key, name varchar, price integer, catogery varchar)

        index  --> /products     [get] no content in body
        show   --> /products/:id [get] no content in body
        create --> /products     [post] body{name, price, catogery,token}
        update --> /products/:id [patch]  body{name, price, catogery, token}
        delete --> /products/:id [delete]  body{token}

    Orders Table:

        (id serial primary key, status varchar, user_id bigint references (user table))

        index      --> /users/:user_id/orders           [get] body{token}
        show       --> /users/:user_id/orders/:order_id [get] body{token}
        create     --> /users/:user_id/orders           [post] body{status, token}
        update     --> /users/:user_id/orders/:order_id [patch] body{status, token}
        delete     --> /users/:user_id/orders/:order_id [delete] body{token}

    order_products Table:

        (id serial primary key, quantity integer, order_id bigint references (order table), product_id bigint references (product table))

        addProduct --> /users/:user_id/orders/:order_id/products [post] body{product_id, quantity, token}



                