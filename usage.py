import dash_advanced_grid
import dash
import dash.dependencies as dep
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

HEADERS = [
    {"headerName": "Make", "field": "make", "filter": True},
    {"headerName": "Model", "field": "model"},
    {"headerName": "Price", "field": "price"},
]

ROW_DATA = []

app.layout = html.Div(
    [
        dash_advanced_grid.DashAdvancedGrid(
            id="table",
            header=HEADERS,
            rows=ROW_DATA,
            style={"height": "200px", "width": "600px"},
        ),
        html.Button("Add Row", id="submit"),
    ]
)


@app.callback(
    dep.Output("table", "rows"),
    [dep.Input("submit", "n_clicks")],
    [dep.State("table", "rows")],
)
def test(n_clicks, rows):
    if n_clicks:
        return rows + [{"make": "Toyota", "model": "Celica", "price": 35000}]
    return []


if __name__ == "__main__":
    app.run_server(debug=True)
