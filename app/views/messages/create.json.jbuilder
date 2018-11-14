json.user_name @message.user.name
json.content @message.content
json.created_at @message.created_at.to_s(:default)
json.image @message.image.to_s
