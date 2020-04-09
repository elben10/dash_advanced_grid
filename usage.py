import dash_advanced_grid
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

HEADERS = [
    {"headerName": "Make", "field": "make", "filter": True},
    {"headerName": "Model", "field": "model"},
    {"headerName": "Price", "field": "price"},
]

ROW_DATA = [
    {"make": "Toyota", "model": "Celica", "price": 35000},
    {"make": "Ford", "model": "Mondeo", "price": 32000},
    {"make": "Porsche", "model": "Boxter", "price": 72000},
    {"make": "Porsche", "model": "Boxter", "price": 72000},
]

app.layout = html.Div(
    [dash_advanced_grid.DashAdvancedGrid(data={"header": HEADERS, "rows": ROW_DATA}),]
)


if __name__ == "__main__":
    app.run_server(debug=True)
