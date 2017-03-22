class UsersController < ApplicationController
	before_action :require_valid_user, only: [:index]
	impressionist actions: [:show] #, unique: [:user_id]

	def index
		@boots = User.where(company_id: nil)
		@search = @boots.search(params[:q])
		if @search
			@search.build_condition
			@boots = @search.result
		end
		render 'boots_index'
	end

	def new
		@user = User.new
		@companies = Company.all
		@user_type = params[:user_type]
	end

	def create
		@user = User.new(user_params)
		@companies = Company.all
		@token = Token.find_by(characters: params[:user][:unique_token])
		p "BEFORE SAVE LINE"
		if @token && @token.used? == false && @user.save
			@token.update_attribute(:user_id, @user.id)
			@user.update_attribute(:company_id, @token.company_id)
			if @token.admin_token
				@user.update_attribute(:admin_status, true)
			end

			UserMailer.welcome_email(@user).deliver
			p "AFTER EMAIL LINE"
			login
			redirect_to @user
		else
			p "*" * 100
			p "ELSE WE FUCKED UP"
			render 'new'
		end
	end

	def show
		@user = User.find(params[:id])
		@links = @user.links
		@profile = @user.profile
		@uploads = @user.uploads
		@resume = Resume.new
		@impressions = Impression.where(user_id: current_user.id)

		p "*" * 50
		p current_user.id
		p "*" * 50
		p @user.id
		p "*" * 50
	end

	private

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :photo, :company_id)
	end

end
