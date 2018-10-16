# README

## userテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through:s :members

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many :members
- has_many :messages
- has_many :users, through: :members

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
|[:user_id, :group_id]||unique: true|

### Association
- belongs_to :group
- belongs_to :user
