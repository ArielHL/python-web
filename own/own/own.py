import reflex as rx 
from own.components.navbar import navbar
from own.views.headers.header import header
from own.views.links.links import links
from own.components.footer import footer
from own.styles import styles

class State(rx.State):
    pass

def index () -> rx.Component:
    return  rx.box (
                navbar(),
                rx.center(
                    rx.vstack(
                        header(),
                        links(),
                        max_width=styles.MAX_WIDTH,
                        width='100%',
                        margin_y=styles.Size.LARGE.value
                    )
                ),
                footer()   
         )
app = rx.App(style=styles.BASE_STYLES)
app.add_page(index)
app.compile()       