class MenusController < ApplicationController
  def show
    @menu = forge_client.get_menu(4)
  end

  private

  def forge_client
    @forge_client ||= ForgeClient.new(token: 'AkZUSWiBSIrJxDL1o0l4CAtt')
  end
end
