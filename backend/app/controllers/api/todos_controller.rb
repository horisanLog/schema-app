class Api::TodosController < ApplicationController
  def index
    render json: { message: "Hello World!"} , status: :ok
    
  end
end
