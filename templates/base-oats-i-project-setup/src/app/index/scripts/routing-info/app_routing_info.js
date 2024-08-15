//@ts-check
import RoutingInfoUtils from "oats-i/router/utils/routing-info/routing_info_utils";
import AppMainNavInfo from "./app_main_nav_info";
import homeMainFragmentBuilder from "../../../fragments/home/scripts/home_main_fragment"

const AppRoutingInfo = RoutingInfoUtils.buildMainRoutingInfo([

    {
        route: "/",
        target: homeMainFragmentBuilder,
        nestedChildFragments: null
    }
], AppMainNavInfo);

export default AppRoutingInfo;