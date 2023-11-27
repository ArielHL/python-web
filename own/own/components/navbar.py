import reflex as rx 
from own.styles import styles


def navbar() -> rx.Component:
    return rx.hstack(
            rx.text(
                "mouredev",
                font_size=styles.Size.MEDIUM.value,
                font_weight='bold'
                ),
            rx.spacer(),
            rx.input(
                placeholder="Search...",
                width="300px",
                padding=styles.Size.SMALL.value,
                border_radius=styles.Size.MEDIUM.value,
                background_color='white',
                border='1px solid ligtblue'
                ),
            rx.spacer(),
            rx.menu(
                rx.menu_button("Menu"),
                rx.menu_list(
                    rx.menu_item("User Settings"),
                    rx.menu_divider(),
                    rx.menu_item("Explore"),
                    rx.menu_item("Log Out"),
                ),
            ),
            
        position='sticky',
        bg='lightgray',
        width='100%',
        padding_x=styles.Size.DEFAULT.value,
        padding_y=styles.Size.SMALL.value,
        z_index='100',
        top='0px',
        display='flex',
        align_items='center',
      
    )   