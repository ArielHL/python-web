import reflex as rx 

def header () -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Jon la Toca", size="xl"),
        rx.text("@jonlatoca", size="xl"),
        rx.text("Hola mi nombre es juan y la toco mucho", size="xl"),
        rx.text("""
                Soy ingeniero de software desde hace más de 12 años. 
                Actualmente trabajo como freelance full-stack developer iOS y Android. 
                Además creo contenido formativo sobre programación y tecnología en redes. 
                Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!
                
                
                """)
        
    )