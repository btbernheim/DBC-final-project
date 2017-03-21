class Job < ApplicationRecord
	is_impressionable
	
	belongs_to :company, required: false
	has_many :favorites

	private

	UNRANSACKABLE_ATTRIBUTES = ["id", "updated_at"]

	def self.ransackable_attributes(auth_object = nil)
  	(column_names - UNRANSACKABLE_ATTRIBUTES) + _ransackers.keys
	end
end
