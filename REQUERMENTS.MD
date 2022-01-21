Database Schema:
    Users Table:

        (id serial primary key, first_name varchar, last_name varchar, password varchar)

        index   --> /users     [get]    no content in body
        show    --> /users/:id [get]    no content in body
        create  --> /users     [post]   body{first_name, last_name, password}
        update  --> /users/:id [post]   body{first_name, last_name}
        delete  --> /users/:id [delete] no content in body
        login   --> /login     [post]   body{username, password}

    Products Table:

        (id serial primary key, name varchar, price integer, catogery varchar)

        index  --> /products     [get] no content in body
        show   --> /products/:id [get] no content in body
        create --> /products     [post] body{name, price, catogery}
        update --> /products/:id [post] body{name, price, catogery}
        delete --> /products/:id [delete] no content in body

    Orders Table:

        (id serial primary key, status varchar, user_id bigint references (user table))

        index      --> /users/:user_id/orders           [get] no content in body
        show       --> /users/:user_id/orders/:order_id [get] no content in body
        create     --> /users/:user_id/orders           [post] body{status}
        update     --> /users/:user_id/orders/:order_id [post] body{status}
        delete     --> /users/:user_id/orders/:order_id [delete] no content in body

    order_products Table:

        (id serial primary key, quantity integer, order_id bigint references (order table), product_id bigint references (product table))

        addProduct --> /users/:user_id/orders/:order_id/products [post] body{product_id, quantity}



                