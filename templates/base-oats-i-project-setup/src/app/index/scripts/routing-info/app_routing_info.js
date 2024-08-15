//@ts-check
import RoutingInfoUtils from "oats-i/router/utils/routing-info/routing_info_utils";

const AppRoutingInfo = RoutingInfoUtils.buildMainRoutingInfo([

    {
        route: "/",
        target: HomeMainFragmentBuilder,
        nestedChildFragments: null
    }
], []);

export default AppRoutingInfo;