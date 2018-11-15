json.array! @new_messages do |message|
  json.id message.id
  json.user_name message.user.name
  json.content message.content
<<<<<<< HEAD
  json.created_at message.created_at.to_s(:default)
=======
  json.date message.created_at.to_s(:default)
>>>>>>> f691a613aa351617b3ee9becec17ce3f286bf481
  json.image message.image.to_s
end
