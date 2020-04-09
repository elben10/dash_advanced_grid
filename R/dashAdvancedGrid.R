# AUTO GENERATED FILE - DO NOT EDIT

dashAdvancedGrid <- function(id=NULL, data=NULL, header=NULL, rows=NULL, style=NULL) {
    
    props <- list(id=id, data=data, header=header, rows=rows, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAdvancedGrid',
        namespace = 'dash_advanced_grid',
        propNames = c('id', 'data', 'header', 'rows', 'style'),
        package = 'dashAdvancedGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
