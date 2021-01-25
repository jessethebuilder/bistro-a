# load './app/lib/forge_client.rb'

class ForgeClient
  def initialize(token: nil)
    @token = token
  end

  def get_menu(menu_id)
    response = RestClient::Request.execute(
      method: :get,
      url: "https://the-forge-web.herokuapp.com/menus/#{menu_id}?deep=true",
      headers: headers
    )

    JSON.parse(response.body, object_class: OpenStruct)
  end

  def headers
    {
      "Authorization" => "Token #{@token}",
      "ACCEPT" => "application/json"
    }
  end
end
