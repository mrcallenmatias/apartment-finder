class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
    # def create 
    #     apartment = Apartment.create(apartment_params)
    #     render json: apartment
    # end
    # # def update
    # # end
    # # def destroy
    # # end

    # private
    # def apartment_params
    #     params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image)
    # end
end
