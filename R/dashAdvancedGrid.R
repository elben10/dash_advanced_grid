# AUTO GENERATED FILE - DO NOT EDIT

dashAdvancedGrid <- function(id=NULL, data=NULL) {
    
    props <- list(id=id, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAdvancedGrid',
        namespace = 'dash_advanced_grid',
        propNames = c('id', 'data'),
        package = 'dashAdvancedGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
