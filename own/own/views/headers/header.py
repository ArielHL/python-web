import reflex as rx 
from own.components.link_icon import link_icon
from own.components.info_text import info_text
from own.styles import styles

def header () -> rx.Component:
    return rx.vstack(
        
        rx.hstack(
            rx.avatar(name="Jon la Toca", size="xl"),
            rx.vstack(
                rx.heading(
                    "Ariel Limes", 
                    size="lg"
                    ),
                rx.text(
                    "@jonlatoca",
                    margin_top="0px !important"
                    ),
                rx.hstack(
                    link_icon("https://x.com/mouredev"),
                    link_icon("https://x.com/mouredev"),
                    link_icon("https://x.com/mouredev")
                ),
                
                aling_items="start",  
            ),
            spacing=styles.Size.MEDIUM.value,
        ),
        rx.flex(
            info_text("+14", "Años de experiencia!"),
            rx.spacer(),
            info_text("+14", "Años de experiencia!"),
            rx.spacer(),
            info_text("+14", "Años de experiencia!"),
            width="100%",
        ),
         
        rx.text("""
                Soy ingeniero de software desde hace más de 12 años. 
                Actualmente trabajo como freelance full-stack developer iOS y Android. 
                Además creo contenido formativo sobre programación y tecnología en redes. 
                Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!
                """),
        spacing=styles.Size.LARGE.value,
        align_items="start",
        
    )