//los getters sirven para trabajar encima de los estados, ejm algun calculo en el atributo del objeto etc...
import home from "@/components/Home";

export default{
  //for async actions is necessary to use async getters
  async background_home(state) {
   return await extractSetting(state.settings, "site.home_background");
  },
  //event day
  async event_day(state) {
    return await extractSetting(state.settings, 'site.event_day');
  },
  //single name girlfriend
  async gsingle_name(state){
    return await extractSetting(state.settings, 'site.girlfriend_name').split(" ")[0];
  },
  //single name boyfriend
  async bsingle_name(state){
    return await extractSetting(state.settings, 'site.boyfriend_name').split(" ")[0];
  },
  //name girlfriend
  async g_name(state){
    return await extractSetting(state.settings, 'site.girlfriend_name');
  },
  //name boyfriend
  async b_name(state){
    return await extractSetting(state.settings, 'site.boyfriend_name');
  },
  //lastname girlfriend
  async g_lastname(state){
    return await extractSetting(state.settings, 'site.girlfriend_lastname');
  },
  //lastname girlfriend
  async b_lastname(state){
    return await extractSetting(state.settings, 'site.boyfriend_lastname');
  },
  //text invitation
  async text_invitation(state){
    return await extractSetting(state.settings, 'site.text_invitation');
  },
  //text registration
  async text_registration(state){
    return await extractSetting(state.settings, 'site.text_registration');
  },
  //title groom squad
  async title_groom_squad(state){
    return await extractSetting(state.settings, 'site.title_groom_squad');
  },
  //title bride squad
  async title_bride_squad(state){
    return await extractSetting(state.settings, 'site.title_bride_squad');
  },
  //front groom squad
  async front_groom_squad(state){
    return await extractSetting(state.settings, 'site.front_groom_squad');
  },
  //front bride squad
  async front_bride_squad(state){
    return await extractSetting(state.settings, 'site.front_bride_squad');
  },
  //show bride squad
  async show_bride_squad(state){
    return await extractSetting(state.settings, 'site.show_bride_squad');
  },
  //show groom squad
  async show_groom_squad(state){
    return await extractSetting(state.settings, 'site.show_groom_squad');
  },
  //show gifts
  async render_gifts(state){
    return await extractSetting(state.settings, 'site.show_gifts');
  },
  //message invitation
  async message_invitation(state){
    return await extractSetting(state.settings, 'site.message_invitation');
  },
  //background lodging
  async background_lodging(state){
    return await extractSetting(state.settings, 'site.background_lodging')
  },
  //message lodging
  async message_lodging(state){
    return await extractSetting(state.settings, 'site.message_lodging')
  },
  //background beauty
  async background_beauty(state){
    return await extractSetting(state.settings, 'site.background_beauty')
  },
  //message beauty
  async message_beauty(state){
    return await extractSetting(state.settings, 'site.message_beauty')
  },
  //get locations lodgings
  async lodgings(state){
    return await state.suggestedLocations.filter(location => location.type == 1 )
  },
  //get locations beauties
  async beauties(state){
    return await state.suggestedLocations.filter(location => location.type == 2 || location.type === 3 )
  },
  //show comments
  async show_comments(state){
    return await extractSetting(state.settings, 'site.show_comments')
  },
  //message comments
  async comments_message(state){
    return await extractSetting(state.settings, 'site.comments_message')
  }
}

const extractSetting = (state, key) => {
  return state.filter(item => item.key === key)[0].value;
}
