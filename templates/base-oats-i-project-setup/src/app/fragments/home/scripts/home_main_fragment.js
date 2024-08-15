//@ts-check
import AppFragmentBuilder from "oats-i/fragments/builder/AppFragmentBuilder";
import AppMainFragment from "oats-i/fragments/AppMainFragment"

//finis you. Transfer app_route info and update index in both.
//then get this and its view. And we're done
class HomeMainFragment extends AppMainFragment{

    async initializeView(cb){

        const uiTemplate = require("../views/home.hbs")();
        this.onViewInitSuccess(uiTemplate, cb);
    }
}

const homeMainFragmentBuilder = new AppFragmentBuilder(HomeMainFragment, {

    localRoutingInfos: null,
    viewID: "home-main-fragment",
});
export default homeMainFragmentBuilder;
