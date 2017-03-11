<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Api\V2010\Account\Message;

use Twilio\InstanceContext;
use Twilio\Values;
use Twilio\Version;

class MediaContext extends InstanceContext {
    /**
     * Initialize the MediaContext
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param string $accountSid The account_sid
     * @param string $messageSid The message_sid
     * @param string $sid Fetch by unique media Sid
     * @return \Twilio\Rest\Api\V2010\Account\Message\MediaContext 
     */
    public function __construct(Version $version, $accountSid, $messageSid, $sid) {
        parent::__construct($version);

        // Path Solution
        $this->solution = array(
            'accountSid' => $accountSid,
            'messageSid' => $messageSid,
            'sid' => $sid,
        );

        $this->uri = '/Accounts/' . rawurlencode($accountSid) . '/Messages/' . rawurlencode($messageSid) . '/Media/' . rawurlencode($sid) . '.json';
    }

    /**
     * Deletes the MediaInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->version->delete('delete', $this->uri);
    }

    /**
     * Fetch a MediaInstance
     * 
     * @return MediaInstance Fetched MediaInstance
     */
    public function fetch() {
        $params = Values::of(array());

        $payload = $this->version->fetch(
            'GET',
            $this->uri,
            $params
        );

        return new MediaInstance(
            $this->version,
            $payload,
            $this->solution['accountSid'],
            $this->solution['messageSid'],
            $this->solution['sid']
        );
    }

    /**
     * Provide a friendly representation
     * 
     * @return string Machine friendly representation
     */
    public function __toString() {
        $context = array();
        foreach ($this->solution as $key => $value) {
            $context[] = "$key=$value";
        }
        return '[Twilio.Api.V2010.MediaContext ' . implode(' ', $context) . ']';
    }
}