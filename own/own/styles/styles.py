import reflex as rx
from enum import Enum

# Constants
MAX_WIDTH="600px"

# Sizes
class Size(Enum):
    SMALL = "0.5em"
    DEFAULT = "0.8em"
    MEDIUM = "1em"
    LARGE = "2em"
    

# styles
BASE_STYLES = {
    rx.Button:{
        "width":"100%",
        "height":"100%",
        "display":"flex",
        "align-items":"center",
        "justify-content":"start",
        "padding":Size.SMALL.value,
        "border_radius":Size.MEDIUM.value,
    },
    rx.Link:{
        "text_decoration":"none",
        "_hover":{}
    },
}

title_style = dict(
    width="100%",
    padding_top=Size.SMALL.value,
)


button_title_style = dict(
    
    font_size = Size.MEDIUM.value,
   
)


button_body_style = dict(
    
    font_size = Size.DEFAULT.value,
   
)