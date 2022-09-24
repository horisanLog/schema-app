class Api::Public::TodosController < ApplicationController
  def index
    # binding.pry
    render json: { id: 1, name: "リスト" } , status: :ok
  end
end
