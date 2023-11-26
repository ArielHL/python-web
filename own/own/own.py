import reflex as rx 
from own.components.navbar import navbar
from own.views.headers.header import header
from own.views.links.links import links
from own.components.footer import footer

class State(rx.State):
    pass

def index () -> rx.Component:
    return rx.vstack(
        navbar(),
        header(),
        links(),
        footer()
        
        )
app = rx.App()
app.add_page(index)
app.compile()