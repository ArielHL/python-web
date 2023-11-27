import reflex as rx 
from own.styles import styles



def link_button (title:str,
                 body:str,
                 url:str) -> rx.Component:
    return rx.link( 
                rx.button(
                    rx.hstack(
                        rx.icon(
                            tag='arrow_forward',
                            width=styles.Size.MEDIUM.value,
                            height=styles.Size.MEDIUM.value
                            ),
                        rx.vstack(
                            rx.text(title,style=styles.button_title_style),
                            rx.text(body,style=styles.button_body_style),
                            align_items='start',
                                ),
                               
                             )
                         ),
                href=url,
                is_external=True,
                width='100%',   
                 ) 