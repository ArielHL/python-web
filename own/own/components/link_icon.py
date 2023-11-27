import reflex as rx 



def link_icon(url:str) -> rx.Component:
    return rx.link(
            rx.icon(
                tag='link',  
            ),
            href=url,
            is_external=True
    )