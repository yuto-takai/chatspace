# frozen_string_literal: true

json.array! @users do |user|
  json.name user.name
  json.id user.id
end
