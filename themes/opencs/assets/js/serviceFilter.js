function hideAll(service) {
    var eles = document.getElementById("services-tbody").getElementsByClassName(service);
    for (var i = 0; i < eles.length; i++) {
        const element = eles[i];
        element.style.display = "none";
    }
}

function showAll(service) {
    var eles = document.getElementById("services-tbody").getElementsByClassName(service);
    for (var i = 0; i < eles.length; i++) {
        const element = eles[i];
        element.style.display = "table-row";
    }
}

function filterBy($status) {
    switch ($status) {
        case "$all":
            showAll("service-active");
            showAll("service-pending");
            showAll("service-suspended");
            showAll("service-terminated");
            showAll("service-cancelled");
            break;
        case "$active":
            showAll("service-active");
            hideAll("service-pending");
            hideAll("service-suspended");
            hideAll("service-terminated");
            hideAll("service-cancelled");
            break;
        case "$pending":
            showAll("service-pending");
            hideAll("service-active");
            hideAll("service-suspended");
            hideAll("service-terminated");
            hideAll("service-cancelled");
            break;
        case "$suspended":
            showAll("service-suspended");
            hideAll("service-pending");
            hideAll("service-active");
            hideAll("service-terminated");
            hideAll("service-cancelled");
            break;
        case "$terminated":
            showAll("service-terminated");
            hideAll("service-pending");
            hideAll("service-suspended");
            hideAll("service-active");
            hideAll("service-cancelled");
            break;
        case "$cancelled":
            showAll("service-cancelled");
            hideAll("service-pending");
            hideAll("service-suspended");
            hideAll("service-terminated");
            hideAll("service-active");
            break;
    }
}