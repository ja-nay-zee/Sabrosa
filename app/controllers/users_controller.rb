class UsersController < ApplicationController
    def index 
        @users = User.all
        render json: @users, status: 200
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password)
    end
end
