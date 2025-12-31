/**
 * Fluent API methods module for Surfgram Telegram Bot SDK
 * @module fluent/methods
 * @description Attaches all API methods to Bot prototype for fluent API access
 */

import { Bot } from "../../core/bot";
import * as methods from "../methods";

/**
 * Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.
 * @memberof Bot.prototype
 * @instance
 * @function getUpdates
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getUpdates = function (...args: any[]) {
	return (methods as any).getUpdates.apply(this, args);
};

/**
 * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request \(a request with response HTTP status code different from 2XY\), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setWebhook
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setWebhook = function (...args: any[]) {
	return (methods as any).setWebhook.apply(this, args);
};

/**
 * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteWebhook
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteWebhook = function (...args: any[]) {
	return (methods as any).deleteWebhook.apply(this, args);
};

/**
 * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
 * @memberof Bot.prototype
 * @instance
 * @function getWebhookInfo
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getWebhookInfo = function (...args: any[]) {
	return (methods as any).getWebhookInfo.apply(this, args);
};

/**
 * A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * @memberof Bot.prototype
 * @instance
 * @function getMe
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMe = function (...args: any[]) {
	return (methods as any).getMe.apply(this, args);
};

/**
 * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
 * @memberof Bot.prototype
 * @instance
 * @function logOut
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).logOut = function (...args: any[]) {
	return (methods as any).logOut.apply(this, args);
};

/**
 * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
 * @memberof Bot.prototype
 * @instance
 * @function close
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).close = function (...args: any[]) {
	return (methods as any).close.apply(this, args);
};

/**
 * Use this method to send text messages. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendMessage = function (...args: any[]) {
	return (methods as any).sendMessage.apply(this, args);
};

/**
 * Use this method to forward messages of any kind. Service messages and messages with protected content can&#39;t be forwarded. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function forwardMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).forwardMessage = function (...args: any[]) {
	return (methods as any).forwardMessage.apply(this, args);
};

/**
 * Use this method to forward multiple messages of any kind. If some of the specified messages can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
 * @memberof Bot.prototype
 * @instance
 * @function forwardMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).forwardMessages = function (...args: any[]) {
	return (methods as any).forwardMessages.apply(this, args);
};

/**
 * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn&#39;t have a link to the original message. Returns the MessageId of the sent message on success.
 * @memberof Bot.prototype
 * @instance
 * @function copyMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).copyMessage = function (...args: any[]) {
	return (methods as any).copyMessage.apply(this, args);
};

/**
 * Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don&#39;t have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
 * @memberof Bot.prototype
 * @instance
 * @function copyMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).copyMessages = function (...args: any[]) {
	return (methods as any).copyMessages.apply(this, args);
};

/**
 * Use this method to send photos. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendPhoto
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendPhoto = function (...args: any[]) {
	return (methods as any).sendPhoto.apply(this, args);
};

/**
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 * @memberof Bot.prototype
 * @instance
 * @function sendAudio
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendAudio = function (...args: any[]) {
	return (methods as any).sendAudio.apply(this, args);
};

/**
 * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * @memberof Bot.prototype
 * @instance
 * @function sendDocument
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendDocument = function (...args: any[]) {
	return (methods as any).sendDocument.apply(this, args);
};

/**
 * Use this method to send video files, Telegram clients support MPEG4 videos \(other formats may be sent as Document\). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 * @memberof Bot.prototype
 * @instance
 * @function sendVideo
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendVideo = function (...args: any[]) {
	return (methods as any).sendVideo.apply(this, args);
};

/**
 * Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 * @memberof Bot.prototype
 * @instance
 * @function sendAnimation
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendAnimation = function (...args: any[]) {
	return (methods as any).sendAnimation.apply(this, args);
};

/**
 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
 * @memberof Bot.prototype
 * @instance
 * @function sendVoice
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendVoice = function (...args: any[]) {
	return (methods as any).sendVoice.apply(this, args);
};

/**
 * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendVideoNote
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendVideoNote = function (...args: any[]) {
	return (methods as any).sendVideoNote.apply(this, args);
};

/**
 * Use this method to send paid media. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendPaidMedia
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendPaidMedia = function (...args: any[]) {
	return (methods as any).sendPaidMedia.apply(this, args);
};

/**
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendMediaGroup
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendMediaGroup = function (...args: any[]) {
	return (methods as any).sendMediaGroup.apply(this, args);
};

/**
 * Use this method to send point on the map. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendLocation
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendLocation = function (...args: any[]) {
	return (methods as any).sendLocation.apply(this, args);
};

/**
 * Use this method to send information about a venue. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendVenue
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendVenue = function (...args: any[]) {
	return (methods as any).sendVenue.apply(this, args);
};

/**
 * Use this method to send phone contacts. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendContact
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendContact = function (...args: any[]) {
	return (methods as any).sendContact.apply(this, args);
};

/**
 * Use this method to send a native poll. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendPoll
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendPoll = function (...args: any[]) {
	return (methods as any).sendPoll.apply(this, args);
};

/**
 * Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendChecklist
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendChecklist = function (...args: any[]) {
	return (methods as any).sendChecklist.apply(this, args);
};

/**
 * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendDice
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendDice = function (...args: any[]) {
	return (methods as any).sendDice.apply(this, args);
};

/**
 * Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function sendChatAction
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendChatAction = function (...args: any[]) {
	return (methods as any).sendChatAction.apply(this, args);
};

/**
 * Use this method to change the chosen reactions on a message. Service messages of some types can&#39;t be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can&#39;t use paid reactions. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setMessageReaction
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setMessageReaction = function (...args: any[]) {
	return (methods as any).setMessageReaction.apply(this, args);
};

/**
 * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 * @memberof Bot.prototype
 * @instance
 * @function getUserProfilePhotos
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getUserProfilePhotos = function (...args: any[]) {
	return (methods as any).getUserProfilePhotos.apply(this, args);
};

/**
 * Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setUserEmojiStatus
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setUserEmojiStatus = function (...args: any[]) {
	return (methods as any).setUserEmojiStatus.apply(this, args);
};

/**
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file\_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 * @memberof Bot.prototype
 * @instance
 * @function getFile
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getFile = function (...args: any[]) {
	return (methods as any).getFile.apply(this, args);
};

/**
 * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function banChatMember
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).banChatMember = function (...args: any[]) {
	return (methods as any).banChatMember.apply(this, args);
};

/**
 * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don&#39;t want this, use the parameter only\_if\_banned. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unbanChatMember
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unbanChatMember = function (...args: any[]) {
	return (methods as any).unbanChatMember.apply(this, args);
};

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function restrictChatMember
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).restrictChatMember = function (...args: any[]) {
	return (methods as any).restrictChatMember.apply(this, args);
};

/**
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function promoteChatMember
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).promoteChatMember = function (...args: any[]) {
	return (methods as any).promoteChatMember.apply(this, args);
};

/**
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatAdministratorCustomTitle
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatAdministratorCustomTitle = function (
	...args: any[]
) {
	return (methods as any).setChatAdministratorCustomTitle.apply(this, args);
};

/**
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won&#39;t be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function banChatSenderChat
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).banChatSenderChat = function (...args: any[]) {
	return (methods as any).banChatSenderChat.apply(this, args);
};

/**
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unbanChatSenderChat
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unbanChatSenderChat = function (...args: any[]) {
	return (methods as any).unbanChatSenderChat.apply(this, args);
};

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can\_restrict\_members administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatPermissions
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatPermissions = function (...args: any[]) {
	return (methods as any).setChatPermissions.apply(this, args);
};

/**
 * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
 * @memberof Bot.prototype
 * @instance
 * @function exportChatInviteLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).exportChatInviteLink = function (...args: any[]) {
	return (methods as any).exportChatInviteLink.apply(this, args);
};

/**
 * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
 * @memberof Bot.prototype
 * @instance
 * @function createChatInviteLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).createChatInviteLink = function (...args: any[]) {
	return (methods as any).createChatInviteLink.apply(this, args);
};

/**
 * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @memberof Bot.prototype
 * @instance
 * @function editChatInviteLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editChatInviteLink = function (...args: any[]) {
	return (methods as any).editChatInviteLink.apply(this, args);
};

/**
 * Use this method to create a subscription invite link for a channel chat. The bot must have the can\_invite\_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
 * @memberof Bot.prototype
 * @instance
 * @function createChatSubscriptionInviteLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).createChatSubscriptionInviteLink = function (
	...args: any[]
) {
	return (methods as any).createChatSubscriptionInviteLink.apply(this, args);
};

/**
 * Use this method to edit a subscription invite link created by the bot. The bot must have the can\_invite\_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @memberof Bot.prototype
 * @instance
 * @function editChatSubscriptionInviteLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editChatSubscriptionInviteLink = function (
	...args: any[]
) {
	return (methods as any).editChatSubscriptionInviteLink.apply(this, args);
};

/**
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
 * @memberof Bot.prototype
 * @instance
 * @function revokeChatInviteLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).revokeChatInviteLink = function (...args: any[]) {
	return (methods as any).revokeChatInviteLink.apply(this, args);
};

/**
 * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can\_invite\_users administrator right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function approveChatJoinRequest
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).approveChatJoinRequest = function (...args: any[]) {
	return (methods as any).approveChatJoinRequest.apply(this, args);
};

/**
 * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can\_invite\_users administrator right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function declineChatJoinRequest
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).declineChatJoinRequest = function (...args: any[]) {
	return (methods as any).declineChatJoinRequest.apply(this, args);
};

/**
 * Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatPhoto
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatPhoto = function (...args: any[]) {
	return (methods as any).setChatPhoto.apply(this, args);
};

/**
 * Use this method to delete a chat photo. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteChatPhoto
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteChatPhoto = function (...args: any[]) {
	return (methods as any).deleteChatPhoto.apply(this, args);
};

/**
 * Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatTitle
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatTitle = function (...args: any[]) {
	return (methods as any).setChatTitle.apply(this, args);
};

/**
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatDescription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatDescription = function (...args: any[]) {
	return (methods as any).setChatDescription.apply(this, args);
};

/**
 * Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to pin messages in groups and channels respectively. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function pinChatMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).pinChatMessage = function (...args: any[]) {
	return (methods as any).pinChatMessage.apply(this, args);
};

/**
 * Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin messages in groups and channels respectively. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unpinChatMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unpinChatMessage = function (...args: any[]) {
	return (methods as any).unpinChatMessage.apply(this, args);
};

/**
 * Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin all pinned messages in groups and channels respectively. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unpinAllChatMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unpinAllChatMessages = function (...args: any[]) {
	return (methods as any).unpinAllChatMessages.apply(this, args);
};

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function leaveChat
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).leaveChat = function (...args: any[]) {
	return (methods as any).leaveChat.apply(this, args);
};

/**
 * Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
 * @memberof Bot.prototype
 * @instance
 * @function getChat
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getChat = function (...args: any[]) {
	return (methods as any).getChat.apply(this, args);
};

/**
 * Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.
 * @memberof Bot.prototype
 * @instance
 * @function getChatAdministrators
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getChatAdministrators = function (...args: any[]) {
	return (methods as any).getChatAdministrators.apply(this, args);
};

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 * @memberof Bot.prototype
 * @instance
 * @function getChatMemberCount
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getChatMemberCount = function (...args: any[]) {
	return (methods as any).getChatMemberCount.apply(this, args);
};

/**
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
 * @memberof Bot.prototype
 * @instance
 * @function getChatMember
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getChatMember = function (...args: any[]) {
	return (methods as any).getChatMember.apply(this, args);
};

/**
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can\_set\_sticker\_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatStickerSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatStickerSet = function (...args: any[]) {
	return (methods as any).setChatStickerSet.apply(this, args);
};

/**
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can\_set\_sticker\_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteChatStickerSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteChatStickerSet = function (...args: any[]) {
	return (methods as any).deleteChatStickerSet.apply(this, args);
};

/**
 * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
 * @memberof Bot.prototype
 * @instance
 * @function getForumTopicIconStickers
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getForumTopicIconStickers = function (...args: any[]) {
	return (methods as any).getForumTopicIconStickers.apply(this, args);
};

/**
 * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns information about the created topic as a ForumTopic object.
 * @memberof Bot.prototype
 * @instance
 * @function createForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).createForumTopic = function (...args: any[]) {
	return (methods as any).createForumTopic.apply(this, args);
};

/**
 * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function editForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editForumTopic = function (...args: any[]) {
	return (methods as any).editForumTopic.apply(this, args);
};

/**
 * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function closeForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).closeForumTopic = function (...args: any[]) {
	return (methods as any).closeForumTopic.apply(this, args);
};

/**
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function reopenForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).reopenForumTopic = function (...args: any[]) {
	return (methods as any).reopenForumTopic.apply(this, args);
};

/**
 * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_delete\_messages administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteForumTopic = function (...args: any[]) {
	return (methods as any).deleteForumTopic.apply(this, args);
};

/**
 * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unpinAllForumTopicMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unpinAllForumTopicMessages = function (...args: any[]) {
	return (methods as any).unpinAllForumTopicMessages.apply(this, args);
};

/**
 * Use this method to edit the name of the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function editGeneralForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editGeneralForumTopic = function (...args: any[]) {
	return (methods as any).editGeneralForumTopic.apply(this, args);
};

/**
 * Use this method to close an open &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function closeGeneralForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).closeGeneralForumTopic = function (...args: any[]) {
	return (methods as any).closeGeneralForumTopic.apply(this, args);
};

/**
 * Use this method to reopen a closed &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function reopenGeneralForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).reopenGeneralForumTopic = function (...args: any[]) {
	return (methods as any).reopenGeneralForumTopic.apply(this, args);
};

/**
 * Use this method to hide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function hideGeneralForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).hideGeneralForumTopic = function (...args: any[]) {
	return (methods as any).hideGeneralForumTopic.apply(this, args);
};

/**
 * Use this method to unhide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unhideGeneralForumTopic
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unhideGeneralForumTopic = function (...args: any[]) {
	return (methods as any).unhideGeneralForumTopic.apply(this, args);
};

/**
 * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function unpinAllGeneralForumTopicMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).unpinAllGeneralForumTopicMessages = function (
	...args: any[]
) {
	return (methods as any).unpinAllGeneralForumTopicMessages.apply(this, args);
};

/**
 * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * @memberof Bot.prototype
 * @instance
 * @function answerCallbackQuery
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).answerCallbackQuery = function (...args: any[]) {
	return (methods as any).answerCallbackQuery.apply(this, args);
};

/**
 * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
 * @memberof Bot.prototype
 * @instance
 * @function getUserChatBoosts
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getUserChatBoosts = function (...args: any[]) {
	return (methods as any).getUserChatBoosts.apply(this, args);
};

/**
 * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
 * @memberof Bot.prototype
 * @instance
 * @function getBusinessConnection
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getBusinessConnection = function (...args: any[]) {
	return (methods as any).getBusinessConnection.apply(this, args);
};

/**
 * Use this method to change the list of the bot&#39;s commands. See this manual for more details about bot commands. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setMyCommands
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setMyCommands = function (...args: any[]) {
	return (methods as any).setMyCommands.apply(this, args);
};

/**
 * Use this method to delete the list of the bot&#39;s commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteMyCommands
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteMyCommands = function (...args: any[]) {
	return (methods as any).deleteMyCommands.apply(this, args);
};

/**
 * Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.
 * @memberof Bot.prototype
 * @instance
 * @function getMyCommands
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMyCommands = function (...args: any[]) {
	return (methods as any).getMyCommands.apply(this, args);
};

/**
 * Use this method to change the bot&#39;s name. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setMyName
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setMyName = function (...args: any[]) {
	return (methods as any).setMyName.apply(this, args);
};

/**
 * Use this method to get the current bot name for the given user language. Returns BotName on success.
 * @memberof Bot.prototype
 * @instance
 * @function getMyName
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMyName = function (...args: any[]) {
	return (methods as any).getMyName.apply(this, args);
};

/**
 * Use this method to change the bot&#39;s description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setMyDescription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setMyDescription = function (...args: any[]) {
	return (methods as any).setMyDescription.apply(this, args);
};

/**
 * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
 * @memberof Bot.prototype
 * @instance
 * @function getMyDescription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMyDescription = function (...args: any[]) {
	return (methods as any).getMyDescription.apply(this, args);
};

/**
 * Use this method to change the bot&#39;s short description, which is shown on the bot&#39;s profile page and is sent together with the link when users share the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setMyShortDescription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setMyShortDescription = function (...args: any[]) {
	return (methods as any).setMyShortDescription.apply(this, args);
};

/**
 * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
 * @memberof Bot.prototype
 * @instance
 * @function getMyShortDescription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMyShortDescription = function (...args: any[]) {
	return (methods as any).getMyShortDescription.apply(this, args);
};

/**
 * Use this method to change the bot&#39;s menu button in a private chat, or the default menu button. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setChatMenuButton
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setChatMenuButton = function (...args: any[]) {
	return (methods as any).setChatMenuButton.apply(this, args);
};

/**
 * Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.
 * @memberof Bot.prototype
 * @instance
 * @function getChatMenuButton
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getChatMenuButton = function (...args: any[]) {
	return (methods as any).getChatMenuButton.apply(this, args);
};

/**
 * Use this method to change the default administrator rights requested by the bot when it&#39;s added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setMyDefaultAdministratorRights
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setMyDefaultAdministratorRights = function (
	...args: any[]
) {
	return (methods as any).setMyDefaultAdministratorRights.apply(this, args);
};

/**
 * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
 * @memberof Bot.prototype
 * @instance
 * @function getMyDefaultAdministratorRights
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMyDefaultAdministratorRights = function (
	...args: any[]
) {
	return (methods as any).getMyDefaultAdministratorRights.apply(this, args);
};

/**
 * Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.
 * @memberof Bot.prototype
 * @instance
 * @function getAvailableGifts
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getAvailableGifts = function (...args: any[]) {
	return (methods as any).getAvailableGifts.apply(this, args);
};

/**
 * Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function sendGift
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendGift = function (...args: any[]) {
	return (methods as any).sendGift.apply(this, args);
};

/**
 * Gifts a Telegram Premium subscription to the given user. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function giftPremiumSubscription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).giftPremiumSubscription = function (...args: any[]) {
	return (methods as any).giftPremiumSubscription.apply(this, args);
};

/**
 * Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function verifyUser
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).verifyUser = function (...args: any[]) {
	return (methods as any).verifyUser.apply(this, args);
};

/**
 * Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function verifyChat
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).verifyChat = function (...args: any[]) {
	return (methods as any).verifyChat.apply(this, args);
};

/**
 * Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function removeUserVerification
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).removeUserVerification = function (...args: any[]) {
	return (methods as any).removeUserVerification.apply(this, args);
};

/**
 * Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function removeChatVerification
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).removeChatVerification = function (...args: any[]) {
	return (methods as any).removeChatVerification.apply(this, args);
};

/**
 * Marks incoming message as read on behalf of a business account. Requires the can\_read\_messages business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function readBusinessMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).readBusinessMessage = function (...args: any[]) {
	return (methods as any).readBusinessMessage.apply(this, args);
};

/**
 * Delete messages on behalf of a business account. Requires the can\_delete\_sent\_messages business bot right to delete messages sent by the bot itself, or the can\_delete\_all\_messages business bot right to delete any message. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteBusinessMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteBusinessMessages = function (...args: any[]) {
	return (methods as any).deleteBusinessMessages.apply(this, args);
};

/**
 * Changes the first and last name of a managed business account. Requires the can\_change\_name business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setBusinessAccountName
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setBusinessAccountName = function (...args: any[]) {
	return (methods as any).setBusinessAccountName.apply(this, args);
};

/**
 * Changes the username of a managed business account. Requires the can\_change\_username business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setBusinessAccountUsername
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setBusinessAccountUsername = function (...args: any[]) {
	return (methods as any).setBusinessAccountUsername.apply(this, args);
};

/**
 * Changes the bio of a managed business account. Requires the can\_change\_bio business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setBusinessAccountBio
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setBusinessAccountBio = function (...args: any[]) {
	return (methods as any).setBusinessAccountBio.apply(this, args);
};

/**
 * Changes the profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setBusinessAccountProfilePhoto
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setBusinessAccountProfilePhoto = function (
	...args: any[]
) {
	return (methods as any).setBusinessAccountProfilePhoto.apply(this, args);
};

/**
 * Removes the current profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function removeBusinessAccountProfilePhoto
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).removeBusinessAccountProfilePhoto = function (
	...args: any[]
) {
	return (methods as any).removeBusinessAccountProfilePhoto.apply(this, args);
};

/**
 * Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can\_change\_gift\_settings business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setBusinessAccountGiftSettings
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setBusinessAccountGiftSettings = function (
	...args: any[]
) {
	return (methods as any).setBusinessAccountGiftSettings.apply(this, args);
};

/**
 * Returns the amount of Telegram Stars owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns StarAmount on success.
 * @memberof Bot.prototype
 * @instance
 * @function getBusinessAccountStarBalance
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getBusinessAccountStarBalance = function (
	...args: any[]
) {
	return (methods as any).getBusinessAccountStarBalance.apply(this, args);
};

/**
 * Transfers Telegram Stars from the business account balance to the bot&#39;s balance. Requires the can\_transfer\_stars business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function transferBusinessAccountStars
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).transferBusinessAccountStars = function (
	...args: any[]
) {
	return (methods as any).transferBusinessAccountStars.apply(this, args);
};

/**
 * Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.
 * @memberof Bot.prototype
 * @instance
 * @function getBusinessAccountGifts
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getBusinessAccountGifts = function (...args: any[]) {
	return (methods as any).getBusinessAccountGifts.apply(this, args);
};

/**
 * Converts a given regular gift to Telegram Stars. Requires the can\_convert\_gifts\_to\_stars business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function convertGiftToStars
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).convertGiftToStars = function (...args: any[]) {
	return (methods as any).convertGiftToStars.apply(this, args);
};

/**
 * Upgrades a given regular gift to a unique gift. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Additionally requires the can\_transfer\_stars business bot right if the upgrade is paid. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function upgradeGift
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).upgradeGift = function (...args: any[]) {
	return (methods as any).upgradeGift.apply(this, args);
};

/**
 * Transfers an owned unique gift to another user. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Requires can\_transfer\_stars business bot right if the transfer is paid. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function transferGift
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).transferGift = function (...args: any[]) {
	return (methods as any).transferGift.apply(this, args);
};

/**
 * Posts a story on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @memberof Bot.prototype
 * @instance
 * @function postStory
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).postStory = function (...args: any[]) {
	return (methods as any).postStory.apply(this, args);
};

/**
 * Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @memberof Bot.prototype
 * @instance
 * @function editStory
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editStory = function (...args: any[]) {
	return (methods as any).editStory.apply(this, args);
};

/**
 * Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteStory
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteStory = function (...args: any[]) {
	return (methods as any).deleteStory.apply(this, args);
};

/**
 * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @memberof Bot.prototype
 * @instance
 * @function editMessageText
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editMessageText = function (...args: any[]) {
	return (methods as any).editMessageText.apply(this, args);
};

/**
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @memberof Bot.prototype
 * @instance
 * @function editMessageCaption
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editMessageCaption = function (...args: any[]) {
	return (methods as any).editMessageCaption.apply(this, args);
};

/**
 * Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can&#39;t be uploaded; use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @memberof Bot.prototype
 * @instance
 * @function editMessageMedia
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editMessageMedia = function (...args: any[]) {
	return (methods as any).editMessageMedia.apply(this, args);
};

/**
 * Use this method to edit live location messages. A location can be edited until its live\_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @memberof Bot.prototype
 * @instance
 * @function editMessageLiveLocation
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editMessageLiveLocation = function (...args: any[]) {
	return (methods as any).editMessageLiveLocation.apply(this, args);
};

/**
 * Use this method to stop updating a live location message before live\_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @memberof Bot.prototype
 * @instance
 * @function stopMessageLiveLocation
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).stopMessageLiveLocation = function (...args: any[]) {
	return (methods as any).stopMessageLiveLocation.apply(this, args);
};

/**
 * Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function editMessageChecklist
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editMessageChecklist = function (...args: any[]) {
	return (methods as any).editMessageChecklist.apply(this, args);
};

/**
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @memberof Bot.prototype
 * @instance
 * @function editMessageReplyMarkup
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editMessageReplyMarkup = function (...args: any[]) {
	return (methods as any).editMessageReplyMarkup.apply(this, args);
};

/**
 * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
 * @memberof Bot.prototype
 * @instance
 * @function stopPoll
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).stopPoll = function (...args: any[]) {
	return (methods as any).stopPoll.apply(this, args);
};

/**
 * Use this method to approve a suggested post in a direct messages chat. The bot must have the &#39;can\_post\_messages&#39; administrator right in the corresponding channel chat. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function approveSuggestedPost
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).approveSuggestedPost = function (...args: any[]) {
	return (methods as any).approveSuggestedPost.apply(this, args);
};

/**
 * Use this method to decline a suggested post in a direct messages chat. The bot must have the &#39;can\_manage\_direct\_messages&#39; administrator right in the corresponding channel chat. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function declineSuggestedPost
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).declineSuggestedPost = function (...args: any[]) {
	return (methods as any).declineSuggestedPost.apply(this, args);
};

/**
 * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can&#39;t be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can\_post\_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can\_delete\_messages administrator right in a supergroup or a channel, it can delete any message there.- If the bot has can\_manage\_direct\_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteMessage = function (...args: any[]) {
	return (methods as any).deleteMessage.apply(this, args);
};

/**
 * Use this method to delete multiple messages simultaneously. If some of the specified messages can&#39;t be found, they are skipped. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteMessages
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteMessages = function (...args: any[]) {
	return (methods as any).deleteMessages.apply(this, args);
};

/**
 * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendSticker
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendSticker = function (...args: any[]) {
	return (methods as any).sendSticker.apply(this, args);
};

/**
 * Use this method to get a sticker set. On success, a StickerSet object is returned.
 * @memberof Bot.prototype
 * @instance
 * @function getStickerSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getStickerSet = function (...args: any[]) {
	return (methods as any).getStickerSet.apply(this, args);
};

/**
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
 * @memberof Bot.prototype
 * @instance
 * @function getCustomEmojiStickers
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getCustomEmojiStickers = function (...args: any[]) {
	return (methods as any).getCustomEmojiStickers.apply(this, args);
};

/**
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods \(the file can be used multiple times\). Returns the uploaded File on success.
 * @memberof Bot.prototype
 * @instance
 * @function uploadStickerFile
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).uploadStickerFile = function (...args: any[]) {
	return (methods as any).uploadStickerFile.apply(this, args);
};

/**
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function createNewStickerSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).createNewStickerSet = function (...args: any[]) {
	return (methods as any).createNewStickerSet.apply(this, args);
};

/**
 * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function addStickerToSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).addStickerToSet = function (...args: any[]) {
	return (methods as any).addStickerToSet.apply(this, args);
};

/**
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setStickerPositionInSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setStickerPositionInSet = function (...args: any[]) {
	return (methods as any).setStickerPositionInSet.apply(this, args);
};

/**
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteStickerFromSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteStickerFromSet = function (...args: any[]) {
	return (methods as any).deleteStickerFromSet.apply(this, args);
};

/**
 * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function replaceStickerInSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).replaceStickerInSet = function (...args: any[]) {
	return (methods as any).replaceStickerInSet.apply(this, args);
};

/**
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setStickerEmojiList
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setStickerEmojiList = function (...args: any[]) {
	return (methods as any).setStickerEmojiList.apply(this, args);
};

/**
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setStickerKeywords
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setStickerKeywords = function (...args: any[]) {
	return (methods as any).setStickerKeywords.apply(this, args);
};

/**
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setStickerMaskPosition
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setStickerMaskPosition = function (...args: any[]) {
	return (methods as any).setStickerMaskPosition.apply(this, args);
};

/**
 * Use this method to set the title of a created sticker set. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setStickerSetTitle
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setStickerSetTitle = function (...args: any[]) {
	return (methods as any).setStickerSetTitle.apply(this, args);
};

/**
 * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setStickerSetThumbnail
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setStickerSetThumbnail = function (...args: any[]) {
	return (methods as any).setStickerSetThumbnail.apply(this, args);
};

/**
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setCustomEmojiStickerSetThumbnail
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setCustomEmojiStickerSetThumbnail = function (
	...args: any[]
) {
	return (methods as any).setCustomEmojiStickerSetThumbnail.apply(this, args);
};

/**
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function deleteStickerSet
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).deleteStickerSet = function (...args: any[]) {
	return (methods as any).deleteStickerSet.apply(this, args);
};

/**
 * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
 * @memberof Bot.prototype
 * @instance
 * @function answerInlineQuery
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).answerInlineQuery = function (...args: any[]) {
	return (methods as any).answerInlineQuery.apply(this, args);
};

/**
 * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * @memberof Bot.prototype
 * @instance
 * @function answerWebAppQuery
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).answerWebAppQuery = function (...args: any[]) {
	return (methods as any).answerWebAppQuery.apply(this, args);
};

/**
 * Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.
 * @memberof Bot.prototype
 * @instance
 * @function savePreparedInlineMessage
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).savePreparedInlineMessage = function (...args: any[]) {
	return (methods as any).savePreparedInlineMessage.apply(this, args);
};

/**
 * Use this method to send invoices. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendInvoice
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendInvoice = function (...args: any[]) {
	return (methods as any).sendInvoice.apply(this, args);
};

/**
 * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
 * @memberof Bot.prototype
 * @instance
 * @function createInvoiceLink
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).createInvoiceLink = function (...args: any[]) {
	return (methods as any).createInvoiceLink.apply(this, args);
};

/**
 * If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the Bot API will send an Update with a shipping\_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * @memberof Bot.prototype
 * @instance
 * @function answerShippingQuery
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).answerShippingQuery = function (...args: any[]) {
	return (methods as any).answerShippingQuery.apply(this, args);
};

/**
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @memberof Bot.prototype
 * @instance
 * @function answerPreCheckoutQuery
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).answerPreCheckoutQuery = function (...args: any[]) {
	return (methods as any).answerPreCheckoutQuery.apply(this, args);
};

/**
 * A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.
 * @memberof Bot.prototype
 * @instance
 * @function getMyStarBalance
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getMyStarBalance = function (...args: any[]) {
	return (methods as any).getMyStarBalance.apply(this, args);
};

/**
 * Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
 * @memberof Bot.prototype
 * @instance
 * @function getStarTransactions
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getStarTransactions = function (...args: any[]) {
	return (methods as any).getStarTransactions.apply(this, args);
};

/**
 * Refunds a successful payment in Telegram Stars. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function refundStarPayment
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).refundStarPayment = function (...args: any[]) {
	return (methods as any).refundStarPayment.apply(this, args);
};

/**
 * Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function editUserStarSubscription
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).editUserStarSubscription = function (...args: any[]) {
	return (methods as any).editUserStarSubscription.apply(this, args);
};

/**
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed \(the contents of the field for which you returned the error must change\). Returns True on success.
 * @memberof Bot.prototype
 * @instance
 * @function setPassportDataErrors
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setPassportDataErrors = function (...args: any[]) {
	return (methods as any).setPassportDataErrors.apply(this, args);
};

/**
 * Use this method to send a game. On success, the sent Message is returned.
 * @memberof Bot.prototype
 * @instance
 * @function sendGame
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).sendGame = function (...args: any[]) {
	return (methods as any).sendGame.apply(this, args);
};

/**
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.
 * @memberof Bot.prototype
 * @instance
 * @function setGameScore
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).setGameScore = function (...args: any[]) {
	return (methods as any).setGameScore.apply(this, args);
};

/**
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
 * @memberof Bot.prototype
 * @instance
 * @function getGameHighScores
 * @returns {Promise<any>} Method result
 */
(Bot.prototype as any).getGameHighScores = function (...args: any[]) {
	return (methods as any).getGameHighScores.apply(this, args);
};
